
export const timer = ( timerLength: number ): Promise<boolean> => {
  return new Promise( ( resolve ) => {
      setTimeout(
          () => {
              resolve( true );
          },
          timerLength
      );
  });
}
