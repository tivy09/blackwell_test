import createSupabaseClient from "@/utils/supabase/supabase";
import RegisterView from "./_components/RegisterPageView";

const RegisterPages = async () => {
  const register = async (firstName: string, lastName: string, email: string, mobile: string, country: string, password: string) => {
    "use server";

    const supabase = createSupabaseClient();

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            mobile: mobile,
            country: country
          },
        },
      });

      if (error) {
        console.log(error);
        return;
      }

      return data;
    } catch (error: any) {
      console.log("SIGNUP ERROR", error.message);
      return error.message;
    }
  };

  return <RegisterView registerFunction={register} />;
};

export default RegisterPages;
