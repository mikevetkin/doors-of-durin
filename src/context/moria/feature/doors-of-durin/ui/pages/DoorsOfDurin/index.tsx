import { Input } from '@/components/ui/input';
import { useDoorsOfDurin } from '../../hook/useDoorsOfDurin';
import { Button } from '@/components/ui/button';
import { Ithildin } from '@/shared/Ithildin/ui/components/Ithildin';

export const DoorsOfDurinPage = () => {
  const { viewState, onChange } = useDoorsOfDurin();

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="flex flex-col gap-4">
        <Ithildin viewState={viewState.ithildin}>Something</Ithildin>
        <div className="flex gap-2">
          <Input
            value={viewState.codeInput.value}
            onChange={(el) => onChange(el.target.value)}
          />
          <Button variant="secondary" disabled={viewState.enterButton.disabled}>
            {viewState.enterButton.label}
          </Button>
        </div>
      </div>
    </div>
  );
};
