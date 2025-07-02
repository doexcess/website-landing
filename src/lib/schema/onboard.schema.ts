import Joi from 'joi';

type InferType<T> = T extends Joi.ObjectSchema ? Joi.Schema<T> : never;

export const AddCustomerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  business_id: Joi.string().required(),
});
export interface AddCustomerProps {
  name: string;
  email: string;
  phone: string;
  business_id: string;
}
