/**
 * В каких состояниях может находится система
 */
export interface DoorsOfDurinState {
  name: string;
}

export const doorsOfDurinState = (
  data: Partial<DoorsOfDurinState> = {}
): DoorsOfDurinState => ({
  name: '',
  ...data,
});
