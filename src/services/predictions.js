import { supabase } from "../api/supabase-config";

export const savePrediction = async (datat) => {
    try {
        console.log(datat)
        const { data, error } = await supabase
        .from('predictions')
        .insert(datat)
        .single()

        return {data, error}
    } catch (error) {
        console.log(error)
    }
}

export const getPredictions = async (user) => {
    try {
        const { data, error} = await supabase  
            .from('predictions')
            .select('*')
            .eq('user_ref', user)
        console.log(data)
        return {
            data, error
        }
    } catch (error) {
        
    }
}