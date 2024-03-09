import {IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class UserDto{

    @IsString()
    @IsNotEmpty()
    readonly firstName: string;

    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    readonly email: string;


    @MinLength(6, {message: 'Minimum length of password must be 6'})
    @MaxLength(20, {message: 'Maximum length of password is 20'})
    @IsString()
    readonly password: string;
}