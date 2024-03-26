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
import { FormKey } from '@/context/moria/feature/doors-of-durin/domain/entity/form/FormKey';

interface DoorsOfDurinPageProps {
  viewState: DoorsOfDurinViewState;
  changeForm: (key: FormKey, value: string) => void;
  enter: () => void;
}

export const DoorsOfDurinPage: React.FC<DoorsOfDurinPageProps> = ({
  viewState,
  changeForm,
  enter,
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
            Буква <i>"ando"</i> на тенгваре. Означает <i>"дверь"</i> или{' '}
            <i>"Дурин"</i>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <Ithildin viewState={viewState.ithildin}>
              <Tengwar>
                <h3 className="cursor-default text-3xl">
                  q92h y9jjh5 ] y~T5h-
                </h3>
              </Tengwar>
            </Ithildin>
          </HoverCardTrigger>
          <HoverCardContent className="w-90 text-left">
            Транслитерация: <i>"pedo mellon a minno"</i>
            <br />В перводе на русский: <i>"Молви друг и войди"</i>
          </HoverCardContent>
        </HoverCard>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            enter();
          }}
          className="flex flex-col gap-6"
        >
          {viewState.form.map((input) => (
            <div className="grid w-full max-w-sm items-center gap-1.5 text-left">
              <Label htmlFor={input.key}>
                <Ithildin viewState={viewState.ithildin}>
                  {input.label}
                </Ithildin>
              </Label>
              <Input
                className="text-base"
                id={input.key}
                type="text"
                autoComplete="off"
                size={2}
                onChange={(e) => changeForm(input.key, e.target.value)}
              />
            </div>
          ))}
          <Button
            className="transition duration-100 ease-in-out"
            type="submit"
            variant="ghost"
            disabled={viewState.enter.disabled}
          >
            <Ithildin viewState={viewState.ithildin}>Enter</Ithildin>
          </Button>
        </form>
      </div>
    </div>
  );
};
