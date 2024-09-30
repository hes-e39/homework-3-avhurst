import { type Color, filterColors } from './utils';

type ColorDisplayProps = {
    color: Color;
    isComp?: boolean;
};

export const ColorDisplay = ({ color: { name, hex, comp }, isComp }: ColorDisplayProps) => {
    const style = {
        color: `#${hex}`,
        marginTop: isComp ? 0 : 16,
        marginLeft: isComp ? 16 : 0,
        display: 'flex',
        flexDirection: 'column',
    } as React.CSSProperties;

    // Sanitize comp data for duplicate values
    const filteredComps = filterColors(comp);

    const comps = filteredComps?.map(color => {
        return <ColorDisplay key={`${name} comp: ${color.hex}`} color={color} isComp={true} />;
    });

    return (
        <li style={style}>
            <div>Name: {name}</div>
            <div>Hex: {hex}</div>
            {!!comps && (
                <div>
                    Comps:
                    <ul>{comps}</ul>
                </div>
            )}
        </li>
    );
};
