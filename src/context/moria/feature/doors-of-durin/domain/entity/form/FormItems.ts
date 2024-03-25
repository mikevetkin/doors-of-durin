import { FormKey } from '@/context/moria/feature/doors-of-durin/domain/entity/form/FormKey';

interface DodFormItem {
  key: FormKey;
  name: string;
}

const Name: DodFormItem = {
  key: 'name',
  name: 'Name',
};

const Code: DodFormItem = {
  key: 'code',
  name: 'Code',
};

export const FormItems = [Name, Code] as const;
