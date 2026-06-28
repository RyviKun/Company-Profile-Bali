// components/Icon.tsx
import React from 'react';

export type IconName = 'instagram' | 'mail' | 'phone' | 'facebook';

const iconModules = import.meta.glob<React.FC<React.SVGProps<SVGSVGElement>>>('./*.svg', { eager: true, query: '?react', import: 'default' });

const icons = Object.fromEntries(
    Object.entries(iconModules).map(([path, Component]) => {
        const fileName = path
            .split('/')
            .pop()
            ?.replace(/\.svg$/, '') as IconName;
        return [fileName, Component];
    }),
) as Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>>;

const isValidIcon = (name: string): name is IconName => name in icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    className?: string;
}

export default function Icon({ name, className = 'w-6 h-6', ...props }: IconProps) {
    const SvgComponent = icons[name];
    if (!SvgComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }
    return <SvgComponent className={className} {...props} />;
}
