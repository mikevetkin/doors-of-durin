import { FormKey } from '@/context/moria/feature/doors-of-durin/domain/entity/form/FormKey';

interface DodFormItem {
  key: FormKey;
  name: string;
}

const Name: DodFormItem = {
  key: 'name',
  name: 'Name',
} as const;

const Code: DodFormItem = {
  key: 'code',
  name: 'Code',
} as const;

export const FormItems = [Name, Code] as const;
