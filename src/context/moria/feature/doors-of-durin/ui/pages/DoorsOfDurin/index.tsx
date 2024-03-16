import { Input } from '@/components/ui/input';
import { useDoorsOfDurin } from '../../hook/useDoorsOfDurin';
import { Button } from '@/components/ui/button';
import { Ithildin } from '@/shared/Ithildin/ui/components/Ithildin';

export const DoorsOfDurinPage = () => {
  const { viewState, onChange } = useDoorsOfDurin();

  return (
    <div>
      <Ithildin viewState={}></Ithildin>
      <Input
        value={viewState}
        onChange={(el) => onChange(el.currentTarget.value)}
      />
      <Button />
    </div>
  );
};
