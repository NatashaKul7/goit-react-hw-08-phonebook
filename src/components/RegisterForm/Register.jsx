import { FormBox } from 'components/ContactForm/Form.styled';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/user/operations';

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <label>
        <p>Name</p>
        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="Gomez Simpson"
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        <p>Email</p>
        <input
          {...register('email', { required: true })}
          type="email"
          placeholder="gomez@gmail.com"
        />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        <p>Password</p>
        <input
          {...register('password', { required: true, minLength: 7 })}
          type="password"
          placeholder="*******"
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <button type="submit">Sign up</button>
    </FormBox>
  );
};

export default Register;
