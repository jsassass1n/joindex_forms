export interface LoginSchema {
  isLoading: boolean;
  email: string;
  password: string;
  error: string | undefined;
}

interface RegisterFormFieldsAttrs {
  value: string;
  error: string;
  blured: boolean;
  focused: boolean;
}

interface RegisterFormFields {
  email: RegisterFormFieldsAttrs;
  password: RegisterFormFieldsAttrs;
  password2: RegisterFormFieldsAttrs;
  name: RegisterFormFieldsAttrs;
  surname: RegisterFormFieldsAttrs;
}

export interface RegisterSchema {
  isLoading: boolean;
  form: RegisterFormFields;
  error: string | undefined;
}
