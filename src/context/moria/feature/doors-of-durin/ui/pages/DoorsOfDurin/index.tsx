import { Input } from '@/components/ui/input';
import { Ithildin } from '@/shared/Ithildin/ui/components/Ithildin';
import { Tengwar } from '@/shared/tengwar/ui/components/Tengwar';
import { DoorsOfDurinViewState } from './DoorsOfDurinViewState';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface DoorsOfDurinPageProps {
  viewState: DoorsOfDurinViewState;
  changeCode: (code: string) => void;
}

export const DoorsOfDurinPage: React.FC<DoorsOfDurinPageProps> = ({
  viewState,
  changeCode,
}) => {
  return (
    <div className="flex h-[100svh] items-center justify-center">
      <div className="flex flex-col gap-16">
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
        <div className="flex flex-col gap-6">
          <div className="grid w-full max-w-sm items-center gap-1.5 text-left">
            <Label htmlFor="name">Name</Label>
            <Input
              className="text-base"
              id="name"
              type="text"
              autoComplete="off"
              size={2}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 text-left">
            <Label htmlFor="code">Code</Label>
            <Input
              className="text-base"
              id="code"
              type="text"
              autoComplete="off"
              onChange={(el) => changeCode(el.target.value)}
            />
          </div>
          <Button type="submit" variant="ghost">
            Enter
          </Button>
        </div>
      </div>
    </div>
  );
};
