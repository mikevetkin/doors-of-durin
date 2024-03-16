/**
 * В каких состояниях может находится система
 */
export interface DoorsOfDurinState {
  code: string;
}

export const doorsOfDurinState = (
  data: Partial<DoorsOfDurinState> = {}
): DoorsOfDurinState => ({
  code: '',
  ...data,
});
