import { Input } from '@/components/ui/input';
import { useDoorsOfDurin } from '../../hook/useDoorsOfDurin';
import { Button } from '@/components/ui/button';
import { Ithildin } from '@/shared/Ithildin/ui/components/Ithildin';

export const DoorsOfDurinPage = () => {
  const { viewState, onChange } = useDoorsOfDurin();

  return (
    <div>
      <Ithildin viewState={viewState.ithildin}>Something</Ithildin>
      <Input
        value={viewState.codeInput.value}
        onChange={(el) => onChange(el.target.value)}
      />
      <Button disabled={viewState.enterButton.disabled}>
        {viewState.enterButton.label}
      </Button>
    </div>
  );
};
