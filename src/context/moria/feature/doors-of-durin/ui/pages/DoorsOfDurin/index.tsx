import { Input } from '@/components/ui/input';
import { Ithildin } from '@/shared/Ithildin/ui/components/Ithildin';
import { Tengwar } from '@/shared/tengwar/ui/components/Tengwar';
import { DoorsOfDurinViewState } from './DoorsOfDurinViewState';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

interface DoorsOfDurinPageProps {
  viewState: DoorsOfDurinViewState;
  changeCode: (code: string) => void;
}

export const DoorsOfDurinPage: React.FC<DoorsOfDurinPageProps> = ({
  viewState,
  changeCode,
}) => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="flex flex-col gap-4">
        <HoverCard>
          <HoverCardTrigger>
            <Ithildin viewState={viewState.ithildin}>
              <Tengwar>
                <h3 className="cursor-default text-3xl">q92h y9jj]5 ]y~T5h-</h3>
              </Tengwar>
            </Ithildin>
          </HoverCardTrigger>
          <HoverCardContent className="w-90 text-left">
            Транслитерация: <i>"pedo mellon a minno"</i>
            <br />В перводе на русский: <i>"Молви друг и войди"</i>
          </HoverCardContent>
        </HoverCard>
        <div className="flex gap-2">
          <Input onChange={(el) => changeCode(el.target.value)} />
        </div>
        <HoverCard>
          <HoverCardTrigger>
            <Ithildin viewState={viewState.ithildin}>
              <Tengwar>
                <h3 className="cursor-default text-3xl">2</h3>
              </Tengwar>
            </Ithildin>
          </HoverCardTrigger>
          <HoverCardContent className="w-90 text-left">
            Буква <i>"ando"</i> на тенгваре, означает <i>"врата"</i>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};
