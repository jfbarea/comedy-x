import React from 'react';
export interface ButtonProps {
primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = () => {
    return <button> Press Me </button>
}