import createSupabaseClient from "../supabase/supabase"


export const login = async (email:string, password:string) => {
    const supabase = createSupabaseClient();

    console.log(email, password);

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.log(error);
        return;
    }

    return data;
}