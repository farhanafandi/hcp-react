import React from "react";
import "./styles/_button.scss"
import clsx from "clsx";

export interface ButtonProps {
    label: string;
    color?: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "dark";
    edge?: "smooth" | "round" | "sharp";
    fill?: boolean;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    icon?: React.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
}

const HcpButton = (props: ButtonProps) => {
    const { fill = true } = props;

    const colorClass = () => {
        if (props.className != undefined) {
            return ""
        } else {
            switch (props.color) {
                case "red":
                    return "hcp-btn-red";
                    break;
                case "orange":
                    return "hcp-btn-orange";
                    break;
                case "yellow":
                    return "hcp-btn-yellow";
                    break;
                case "green":
                    return "hcp-btn-green";
                    break;
                case "blue":
                    return "hcp-btn-blue";
                    break;
                case "purple":
                    return "hcp-btn-purple";
                    break;
                case "dark":
                    return "hcp-btn-dark";
                    break;
                default:
                    return "hcp-btn-light";
            }
        }
    }

    const edgeClass = () => {
        switch (props.edge) {
            case "smooth":
                return "hcp-btn-smooth";
                break;
            case "round":
                return "hcp-btn-round";
                break;
            case "sharp":
                return "hcp-btn-sharp";
                break;
            default:
                return "hcp-btn-smooth";
        }
    }

    return (
        <button className={clsx("hcp-btn", props.className, colorClass(), edgeClass(), { 'hcp-btn-outline': !fill }, { 'hcp-btn-icon': props.icon })} onClick={props.onClick} disabled={props.isLoading || props.disabled}>
            <span className={clsx("hcp-btn-wrapper", { 'hcp-btn-wrapper-disapear': props.isLoading })}>{props.icon ? props.icon : undefined}{props.label}</span>
            {props.isLoading && (
                <div className="hcp-btn-loading">
                    <div className="hcp-btn-loading-icon">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="translate(12, 12) scale(0)">
                                <animateTransform id="spinner_dYH2" begin="0;spinner_2BXs.end" attributeName="transform" calcMode="spline" type="translate" dur="1.2s" values="12 12;0 0" keySplines=".52,.6,.25,.99" />
                                <animateTransform begin="0;spinner_2BXs.end" attributeName="transform" calcMode="spline" additive="sum" type="scale" dur="1.2s" values="0;1" keySplines=".52,.6,.25,.99" />
                                <animate begin="0;spinner_2BXs.end" attributeName="opacity" calcMode="spline" dur="1.2s" values="1;0" keySplines=".52,.6,.25,.99" />
                            </path>
                            <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="translate(12, 12) scale(0)">
                                <animateTransform id="spinner_novB" begin="spinner_dYH2.begin+0.2s" attributeName="transform" calcMode="spline" type="translate" dur="1.2s" values="12 12;0 0" keySplines=".52,.6,.25,.99" />
                                <animateTransform begin="spinner_dYH2.begin+0.2s" attributeName="transform" calcMode="spline" additive="sum" type="scale" dur="1.2s" values="0;1" keySplines=".52,.6,.25,.99" />
                                <animate begin="spinner_dYH2.begin+0.2s" attributeName="opacity" calcMode="spline" dur="1.2s" values="1;0" keySplines=".52,.6,.25,.99" />
                            </path>
                            <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="translate(12, 12) scale(0)">
                                <animateTransform id="spinner_2BXs" begin="spinner_dYH2.begin+0.4s" attributeName="transform" calcMode="spline" type="translate" dur="1.2s" values="12 12;0 0" keySplines=".52,.6,.25,.99" />
                                <animateTransform begin="spinner_dYH2.begin+0.4s" attributeName="transform" calcMode="spline" additive="sum" type="scale" dur="1.2s" values="0;1" keySplines=".52,.6,.25,.99" />
                                <animate begin="spinner_dYH2.begin+0.4s" attributeName="opacity" calcMode="spline" dur="1.2s" values="1;0" keySplines=".52,.6,.25,.99" />
                            </path>
                        </svg>
                    </div>
                </div>
            )}
        </button>
    )
};

export default HcpButton;