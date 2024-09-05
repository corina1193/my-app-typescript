export class RegisterData {
    private Username: string;
    private Email: string;
    private Password: string;
    private ConfirmPassword:string;
    private Adress: string;

    constructor(Username: string, Email: string, Password: string, ConfirmPassword:string, Adress: string) {
        this.Username = Username;
        this.Email = Email;
        this.Password = Password;
        this.ConfirmPassword = ConfirmPassword;
        this.Adress = Adress;
    }

 checkPassword(): boolean {
    let isPasswordConfirmed = false;
    if(this.Password === this.ConfirmPassword)
    {
        isPasswordConfirmed = true;
    }  
    return isPasswordConfirmed
}
 
}

