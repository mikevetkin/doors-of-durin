import { FormKey } from '@/context/moria/feature/doors-of-durin/domain/entity/form/FormKey';

export type Form = Record<FormKey, string>;

export const form = (data: Partial<Form> = {}): Form => ({
  code: '',
  name: '',
  ...data,
});
