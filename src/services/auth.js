import { supabase } from "../api/supabase-config";

export const signUpWithEmail = async (data) => {
    let result;
    try {
        result = await supabase.auth.signUp(data)
        return result;
    } catch (error) {
        console.error(error)
    }
    return undefined
}

export const updateProfile = async (data) => {
    try {
        await supabase.from('profiles').upsert(data, { returning: 'minimal' })
    } catch (error) {
        console.error(error)
    }
}

export const signInWithEmail = async (data) => {
    let result;
    try {
        result = await supabase.auth.signIn(data)
        return result;
    } catch (error) {
        console.error(error)
    }
    return undefined
}

export const logout = async () => {
    await supabase.auth.signOut()
}

export const signInWithDiscord = async () => {
    try {
        const { user, session, error } = await supabase.auth.signIn({
            provider: 'discord',
        })
        if (error) throw new Error('Un error ocurrió durante la autenticación')
        return user
    } catch (error) {
        console.error(error)
    }
}

export const getUserProfile = async () => {
    try {
        const user = supabase.auth.user()

        if (user) {
            const { id, app_metadata, user_metadata} = user

            const { data, error, status } = await supabase
                .from('profiles')
                .select('id, username, full_name, updated_at, avatar_url')
                .eq('id', id)
                .single()

            if(error && status === 406) throw new Error('Un error ha ocurrido')

            return { 
                'id': data.id,
                'username': data.username,
                'full_name': data.full_name,
                'avatar_url': data.avatar_url 
            }
        }
    } catch (error) {
        console.log(error);
    }
}