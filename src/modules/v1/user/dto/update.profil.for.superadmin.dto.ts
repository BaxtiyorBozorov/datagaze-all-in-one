import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';

export class UpdateProfilDtoForSuperAdmin {
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    username?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    email?: string;

    @IsOptional()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(32)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/, {
        message:
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    })
    password?: string;
}
