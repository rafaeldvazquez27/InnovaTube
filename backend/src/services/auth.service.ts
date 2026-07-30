export class AuthService {

    login(email: string, password: string) {

        if (
            email === 'admin@innovatube.com' &&
            password === '123456'
        ) {

            return {
                success: true,
                token: 'jwt-temporal'
            };

        }

        return null;

    }

}