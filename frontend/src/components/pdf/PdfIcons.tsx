import { Svg, Path, Circle } from '@react-pdf/renderer';

interface IconProps {
  size?: number;
  color?: string;
  style?: any;
}

// TODO change svg images for the icons
export const UserIcon = ({ size = 12, color = "#000", style }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
     <Path
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
     />
     <Circle cx="12" cy="7" r="4" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const ChildIcon = ({ size = 12, color = "#000", style }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Circle cx="12" cy="7" r="4" fill="none" stroke={color} strokeWidth="2"/>
    <Path d="M12 11c-4 0-6 3-6 6v4h12v-4c0-3-2-6-6-6z" fill="none" stroke={color} strokeWidth="2"/>
  </Svg>
);

export const PetIcon = ({ size = 12, color = "#000", style }: IconProps) => (
    <PawIcon size={size} color={color} style={style} />
);

// Better Paw Icon
export const PawIcon = ({ size = 12, color = "#000", style }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 512 512" style={style}>
      <Path
        d="M226.5 69c-35.6 11.5-58.9 44.9-58.9 84.3 0 47 38.3 85.3 85.3 85.3 47 0 85.3-38.3 85.3-85.3 0-39.4-23.3-72.8-58.9-84.3-5.2-1.7-10.7-2.6-16.4-2.6-5.7 0-11.2.9-16.4 2.6zM61.8 174.5c-35.3 12.8-57.8 45.3-57.8 83.5 0 49.3 40.1 89.4 89.4 89.4 49.3 0 89.4-40.1 89.4-89.4 0-36.9-21.7-68.4-55.6-81.8-8.1-3.1-16.8-4.8-25.9-4.8-13.6 0-26.6 3.7-39.5 8.1zm299 8.1c-12.9-4.3-25.9-8.1-39.5-8.1-9.1 0-17.8 1.7-25.9 4.8-33.8 13.4-55.6 44.9-55.6 81.8 0 49.3 40.1 89.4 89.4 89.4 49.3 0 89.4-40.1 89.4-89.4 0-38.2-22.5-70.7-57.8-83.5zM45.5 391c-11.5 5.5-20.7 15.3-26.1 27.2-5.4 11.9-6.3 25.4-2.5 38 7.6 25 31 43.1 58.4 43.1 34 0 61.6-27.6 61.6-61.6 0-21.6-11-40.8-27.7-52.1-4.7-3.2-9.9-5.7-15.4-7.6-5.6-1.9-11.5-2.9-17.6-2.9-11.2 0-21.8 3.2-30.7 8.9zm171.9 11.1c-14.5 5.5-26.7 16.3-34.1 30.2-7.4 13.9-9.1 30.1-4.5 45.4 9.1 30.4 37.3 52.4 70.4 52.4 40.9 0 74.2-33.3 74.2-74.2 0-26-13.3-49.1-33.4-62.7-5.7-3.9-11.9-6.9-18.5-9.1-6.7-2.2-13.9-3.4-21.2-3.4-11.4 0-22.3 2.9-32.9 6zm198.8 59.8c3.8-12.6 2.9-26.1-2.5-38-5.4-11.9-14.6-21.7-26.1-27.2-9-5.7-19.5-8.9-30.7-8.9-6.1 0-12 1-17.6 2.9-5.5 1.9-10.7 4.4-15.4 7.6-16.7 11.3-27.7 30.5-27.7 52.1 0 34 27.6 61.6 61.6 61.6 27.4 0 50.8-18.1 58.4-43.1z"
        fill={color}
        transform="scale(0.04, 0.04)"
      />
    </Svg>
);


export const BagIcon = ({ size = 12, color = "#000", style }: IconProps) => (
  // Outline style bag to match design
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
     <Path
        d="M6 10v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10M8 10V6a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v4"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M9 16h6" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

export const BackpackIcon = ({ size = 12, color = "#000", style }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
        <Path 
            d="M5 10V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V10M5 10C5 8 6.5 6 9 6H15C17.5 6 19 8 19 10M12 6V2M9 14H15" 
            fill="none" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
    </Svg>
);


export const CheckIcon = ({ size = 12, color = "#000", style }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill={color} />
  </Svg>
);

export const PlaneIcon = ({ size = 12, color = "#000", style }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path
      d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
      fill={color}
    />
  </Svg>
);
