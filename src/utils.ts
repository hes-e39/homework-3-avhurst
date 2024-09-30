export type Color = {
    name: string;
    hex: string;
    comp?: Color[];
};

/*
 * Filter array of colors to ensure no duplicate values are present.
 * @param colors - The Color array
 * @returns The Color array less any duplicate values
 */
export const filterColors = (colors: Color[] | undefined) => {
    return colors?.reduce((acc: Color[], cur: Color) => {
        // Search for existing Color matching current Color
        const foundColor = acc.find(color => {
            return color.name === cur.name && color.hex === cur.hex;
        });

        // Include current Color if it is not found
        if (!foundColor) {
            return [...acc, cur];
        }

        // Else omit current color and return existing result
        return acc;
    }, []);
};
