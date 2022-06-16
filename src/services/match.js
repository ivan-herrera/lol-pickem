import { supabase } from "../api/supabase-config";

export const getMatchs = async () => {
    try {
        const { data, error, status } = await supabase
            .from('match')
            .select(`*, 
                    team1:teams!match_blue_team_fkey(team_id, team_name, team_icon), 
                    team2:teams!match_red_team_fkey(team_id, team_name, team_icon),
                    date_match`)
            .order('date_match', { ascending: true })
            .order('time_match', {ascending: true})
            /*
                .select('*')
                .eq('date_match', '5/12/2022')
            */

        if(error && status === 406) throw new Error('Un error ha ocurrido')

        return data
    } catch (error) {
        console.log(error)
    }

    
}