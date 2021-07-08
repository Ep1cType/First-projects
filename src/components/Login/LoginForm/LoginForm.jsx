import React from 'react';
import {useForm} from "react-hook-form";

const LoginForm = (props) => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange"
    });

    const onSubmit = data => props.login(data.email, data.password, data.rememberMe );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Введите электронную почту</label>
            <input
                type="email"
                {...register("email", { required: true })}
            />
            {errors.email && <p>This is required</p>}
            <label>Введите пароль</label>
            <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && <p>This is required</p>}
            {errors.password?.type === "minLength" && "Your input exceed minLength"}
            <label htmlFor="isRemember">Запомнить меня?</label>
            <input
                type="checkbox"
                {...register("isRemember")}
            />
            <input type="submit" />
            {props.error ? <span>Вы проебались</span> : null}
        </form>
    );
};

export default LoginForm;