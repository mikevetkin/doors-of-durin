import { Input } from '@/components/ui/input';
import { useDoorsOfDurin } from '../../hook/useDoorsOfDurin';
import { Button } from '@/components/ui/button';
import { Ithildin } from '@/shared/Ithildin/ui/components/Ithildin';
import { Tengwar } from '@/shared/tengwar/ui/components/Tengwar';

export const DoorsOfDurinPage = () => {
  const { viewState, tryEnter, changeCode } = useDoorsOfDurin();

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="flex flex-col gap-4">
        <Ithildin viewState={viewState.ithildin}>
          <Tengwar>
            <h3 className="text-3xl">q92h y9jj]5 ]y~T5h-</h3>
          </Tengwar>
        </Ithildin>
        <div className="flex gap-2">
          <Input
            value={viewState.codeInput.value}
            onChange={(el) => changeCode(el.target.value)}
          />
          <Button
            variant="secondary"
            disabled={viewState.enterButton.disabled}
            onClick={tryEnter}
          >
            {viewState.enterButton.label}
          </Button>
        </div>
        <Ithildin viewState={viewState.ithildin}>
          <Tengwar>
            <h3 className="text-3xl">2</h3>
          </Tengwar>
        </Ithildin>
      </div>
    </div>
  );
};
