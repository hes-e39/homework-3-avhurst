import { default as ColorData } from '../public/colors.json';
import { ColorDisplay } from './ColorDisplay';
import { type Color, filterColors } from './utils';

const PAGE_MESSAGE = 'Color palette';

// Sanitize data for duplicate values
const COLOR_DATA = filterColors(ColorData);

const App = () => {
    const colors = (COLOR_DATA as Color[]).map((color: Color) => {
        return <ColorDisplay key={color.hex} color={color} />;
    });

    return (
        <div>
            <h1>{PAGE_MESSAGE}</h1>
            <ul>{colors}</ul>
        </div>
    );
};

export default App;
