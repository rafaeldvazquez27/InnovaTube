import jwt from 'jsonwebtoken';

const SECRET = 'InnovaTubeSecret2026';

export function generateToken(userId: number){
    return jwt.sign(
        { userId },
        SECRET,
        {
            expiresIn: '24h'
        }
    );
}

export function verifyToken(token: string){
    return jwt.verify(
        token,
        SECRET
    );
}