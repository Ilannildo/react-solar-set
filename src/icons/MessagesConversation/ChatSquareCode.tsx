import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ChatSquareCode = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m13.087 21.388.645.382-.645-.382Zm.542-.916-.646-.382.646.382Zm-3.258 0-.645.382.645-.382Zm.542.916.646-.382-.646.382ZM1.25 10.5a.75.75 0 0 0 1.5 0h-1.5Zm1.824 5.126a.75.75 0 0 0-1.386.574l1.386-.574Zm4.716 3.365-.013.75.013-.75Zm-2.703-.372-.287.693.287-.693Zm16.532-2.706.693.287-.693-.287Zm-5.409 3.078-.012-.75.012.75Zm2.703-.372.287.693-.287-.693Zm.7-15.882-.392.64.392-.64Zm1.65 1.65.64-.391-.64.392ZM4.388 2.738l-.392-.64.392.64Zm-1.651 1.65-.64-.391.64.392ZM9.403 19.21l.377-.649-.377.649Zm4.33 2.56.541-.916-1.29-.764-.543.916 1.291.764Zm-4.007-.916.542.916 1.29-.764-.541-.916-1.291.764Zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0l-1.29-.764ZM10.5 2.75h3v-1.5h-3v1.5Zm10.75 7.75v1h1.5v-1h-1.5ZM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43l.026-1.5ZM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3l-1.386.574Zm19.562-4.7c0 1.175 0 2.019-.046 2.685-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913.05-.729.049-1.632.049-2.787h-1.5Zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316l.025 1.5Zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112l-1.386-.574ZM13.5 2.75c1.651 0 2.837 0 3.762.089.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752-1.012-.096-2.282-.095-3.904-.095v1.5Zm9.25 7.75c0-1.622 0-2.891-.096-3.904-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96.088.924.089 2.11.089 3.761h1.5Zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899l-.783 1.28ZM10.5 1.25c-1.622 0-2.891 0-3.904.095-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538.924-.088 2.11-.089 3.761-.089v-1.5ZM2.75 10.5c0-1.651 0-2.837.089-3.762.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5h1.5Zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403l-.783-1.279Zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.229 2.229 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232.121.166.258.396.476.764l1.29-.764Zm-3.24-.349c.44.008.718.014.93.037.198.022.275.054.32.08l.754-1.297c-.293-.17-.598-.24-.909-.274-.298-.033-.657-.038-1.069-.045l-.025 1.5Zm6.498 1.113c.218-.367.355-.598.476-.764.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645-.173.238-.352.54-.555.884l1.291.764Zm1.924-2.612c-.412.007-.771.012-1.069.045-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08.212-.023.49-.03.93-.037l-.026-1.5Z" fill="currentColor" /><path d="m15.5 7.83.172.172c1.333 1.333 2 2 2 2.828 0 .829-.667 1.495-2 2.829l-.172.171M13.294 6 12 10.83l-1.294 4.83M8.5 7.83l-.172.172c-1.333 1.333-2 2-2 2.828 0 .829.667 1.495 2 2.829l.172.171" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m13.087 21.388.645.382-.645-.382Zm.542-.916-.646-.382.646.382Zm-3.258 0-.645.382.645-.382Zm.542.916.646-.382-.646.382Zm-8.532-5.475.693-.287-.693.287Zm5.409 3.078-.013.75.013-.75Zm-2.703-.372-.287.693.287-.693Zm16.532-2.706.693.287-.693-.287Zm-5.409 3.078-.012-.75.012.75Zm2.703-.372.287.693-.287-.693Zm.7-15.882-.392.64.392-.64Zm1.65 1.65.64-.391-.64.392ZM4.388 2.738l-.392-.64.392.64Zm-1.651 1.65-.64-.391.64.392ZM9.403 19.21l.377-.649-.377.649Zm4.33 2.56.541-.916-1.29-.764-.543.916 1.291.764Zm-4.007-.916.542.916 1.29-.764-.541-.916-1.291.764Zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0l-1.29-.764ZM10.5 2.75h3v-1.5h-3v1.5Zm10.75 7.75v1h1.5v-1h-1.5Zm-18.5 1v-1h-1.5v1h1.5Zm-1.5 0c0 1.155 0 2.058.05 2.787.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441-.046-.666-.046-1.51-.046-2.685h-1.5Zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43l.026-1.5ZM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3l-1.386.574Zm19.562-4.7c0 1.175 0 2.019-.046 2.685-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913.05-.729.049-1.632.049-2.787h-1.5Zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316l.025 1.5Zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112l-1.386-.574ZM13.5 2.75c1.651 0 2.837 0 3.762.089.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752-1.012-.096-2.282-.095-3.904-.095v1.5Zm9.25 7.75c0-1.622 0-2.891-.096-3.904-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96.088.924.089 2.11.089 3.761h1.5Zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899l-.783 1.28ZM10.5 1.25c-1.622 0-2.891 0-3.904.095-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538.924-.088 2.11-.089 3.761-.089v-1.5ZM2.75 10.5c0-1.651 0-2.837.089-3.762.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5h1.5Zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403l-.783-1.279Zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.229 2.229 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232.121.166.258.396.476.764l1.29-.764Zm-3.24-.349c.44.008.718.014.93.037.198.022.275.054.32.08l.754-1.297c-.293-.17-.598-.24-.909-.274-.298-.033-.657-.038-1.069-.045l-.025 1.5Zm6.498 1.113c.218-.367.355-.598.476-.764.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645-.173.238-.352.54-.555.884l1.291.764Zm1.924-2.612c-.412.007-.771.012-1.069.045-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08.212-.023.49-.03.93-.037l-.026-1.5Z" fill="currentColor" /><path opacity={0.5} d="m15.5 7.83.172.172c1.333 1.333 2 2 2 2.828 0 .829-.667 1.495-2 2.829l-.172.171M13.294 6 12 10.83l-1.294 4.83M8.5 7.83l-.172.172c-1.333 1.333-2 2-2 2.828 0 .829.667 1.495 2 2.829l.172.171" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m13.087 21.388.645.382-.645-.382Zm.542-.916-.646-.382.646.382Zm-3.258 0-.645.382.645-.382Zm.542.916.646-.382-.646.382Zm-8.532-5.475.693-.287-.693.287Zm5.409 3.078-.013.75.013-.75Zm-2.703-.372-.287.693.287-.693Zm16.532-2.706.693.287-.693-.287Zm-5.409 3.078-.012-.75.012.75Zm2.703-.372.287.693-.287-.693Zm.7-15.882-.392.64.392-.64Zm1.65 1.65.64-.391-.64.392ZM4.388 2.738l-.392-.64.392.64Zm-1.651 1.65-.64-.391.64.392ZM9.403 19.21l.377-.649-.377.649Zm4.33 2.56.541-.916-1.29-.764-.543.916 1.291.764Zm-4.007-.916.542.916 1.29-.764-.541-.916-1.291.764Zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0l-1.29-.764ZM10.5 2.75h3v-1.5h-3v1.5Zm10.75 7.75v1h1.5v-1h-1.5Zm-18.5 1v-1h-1.5v1h1.5Zm-1.5 0c0 1.155 0 2.058.05 2.787.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441-.046-.666-.046-1.51-.046-2.685h-1.5Zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43l.026-1.5ZM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3l-1.386.574Zm19.562-4.7c0 1.175 0 2.019-.046 2.685-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913.05-.729.049-1.632.049-2.787h-1.5Zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316l.025 1.5Zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112l-1.386-.574ZM13.5 2.75c1.651 0 2.837 0 3.762.089.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752-1.012-.096-2.282-.095-3.904-.095v1.5Zm9.25 7.75c0-1.622 0-2.891-.096-3.904-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96.088.924.089 2.11.089 3.761h1.5Zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899l-.783 1.28ZM10.5 1.25c-1.622 0-2.891 0-3.904.095-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538.924-.088 2.11-.089 3.761-.089v-1.5ZM2.75 10.5c0-1.651 0-2.837.089-3.762.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5h1.5Zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403l-.783-1.279Zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.229 2.229 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232.121.166.258.396.476.764l1.29-.764Zm-3.24-.349c.44.008.718.014.93.037.198.022.275.054.32.08l.754-1.297c-.293-.17-.598-.24-.909-.274-.298-.033-.657-.038-1.069-.045l-.025 1.5Zm6.498 1.113c.218-.367.355-.598.476-.764.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645-.173.238-.352.54-.555.884l1.291.764Zm1.924-2.612c-.412.007-.771.012-1.069.045-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08.212-.023.49-.03.93-.037l-.026-1.5Z" fill="currentColor" /><path d="m15.5 7.83.172.172c1.333 1.333 2 2 2 2.828 0 .829-.667 1.495-2 2.829l-.172.171M13.294 6 12 10.83l-1.294 4.83M8.5 7.83l-.171.172c-1.334 1.333-2 2-2 2.828 0 .829.666 1.495 2 2.829l.171.171" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.46 1.25h3.08c1.603 0 2.86 0 3.864.095 1.023.098 1.861.3 2.6.752a5.75 5.75 0 0 1 1.899 1.899c.452.738.654 1.577.752 2.6.095 1.004.095 2.261.095 3.865v1.067c0 1.141 0 2.036-.05 2.759-.05.735-.153 1.347-.388 1.913a5.75 5.75 0 0 1-3.112 3.112c-.805.334-1.721.408-2.977.43-.439.007-.717.012-.929.036-.198.022-.275.054-.32.08-.047.028-.112.078-.224.232-.121.166-.258.396-.476.764l-.542.916c-.773 1.307-2.69 1.307-3.464 0l-.542-.916a10.605 10.605 0 0 0-.476-.764c-.112-.154-.177-.204-.224-.232-.045-.026-.122-.058-.32-.08-.212-.023-.49-.03-.93-.037-1.255-.021-2.171-.095-2.976-.429A5.75 5.75 0 0 1 1.688 16.2c-.235-.566-.339-1.178-.389-1.913-.049-.723-.049-1.618-.049-2.76v-1.066c0-1.604 0-2.86.095-3.865.098-1.023.3-1.862.752-2.6a5.75 5.75 0 0 1 1.899-1.899c.738-.452 1.577-.654 2.6-.752C7.6 1.25 8.857 1.25 10.461 1.25ZM6.739 2.839c-.914.087-1.495.253-1.959.537A4.25 4.25 0 0 0 3.376 4.78c-.284.464-.45 1.045-.537 1.96-.088.924-.089 2.11-.089 3.761v1c0 1.175 0 2.019.046 2.685.045.659.131 1.089.278 1.441a4.25 4.25 0 0 0 2.3 2.3c.515.214 1.173.294 2.429.316h.031c.398.007.747.013 1.037.045.311.035.616.104.909.274.29.17.5.395.682.645.169.232.342.525.538.856l.559.944a.52.52 0 0 0 .882 0l.559-.944c.196-.331.37-.624.538-.856.182-.25.392-.476.682-.645.293-.17.598-.24.909-.274.29-.032.639-.038 1.037-.045h.032c1.255-.022 1.913-.102 2.428-.316a4.25 4.25 0 0 0 2.3-2.3c.147-.352.233-.782.278-1.441.046-.666.046-1.51.046-2.685v-1c0-1.651 0-2.837-.089-3.762-.087-.914-.253-1.495-.537-1.959a4.25 4.25 0 0 0-1.403-1.403c-.464-.284-1.045-.45-1.96-.537-.924-.088-2.11-.089-3.761-.089h-3c-1.651 0-2.837 0-3.762.089Zm6.75 2.437a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.588-9.66a.75.75 0 0 1 .92-.53ZM9.03 7.299a.75.75 0 0 1 0 1.06l-.171.172c-.682.682-1.139 1.141-1.434 1.529-.283.37-.347.585-.347.77 0 .184.064.4.347.77.295.387.752.846 1.434 1.528l.171.171a.75.75 0 1 1-1.06 1.06l-.209-.207c-.635-.636-1.165-1.165-1.529-1.643-.384-.503-.654-1.035-.654-1.68 0-.644.27-1.176.654-1.68.364-.476.894-1.006 1.53-1.641l.208-.209a.75.75 0 0 1 1.06 0Zm5.94 0a.75.75 0 0 1 1.06 0l.209.209c.635.635 1.165 1.165 1.529 1.642.384.503.654 1.035.654 1.68 0 .644-.27 1.176-.654 1.68-.364.476-.894 1.006-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.141 1.434-1.528.283-.37.347-.586.347-.77 0-.185-.064-.4-.347-.77-.295-.388-.752-.847-1.434-1.529l-.171-.171a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg>, Bold: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m13.087 21.388.542-.916c.42-.71.63-1.066.968-1.262.338-.197.763-.204 1.613-.219 1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372.85.015 1.275.022 1.613.219.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0ZM14.97 7.299a.75.75 0 0 1 1.06 0l.209.209c.635.635 1.165 1.165 1.529 1.642.384.503.654 1.035.654 1.68 0 .644-.27 1.176-.654 1.68-.364.476-.894 1.006-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.141 1.434-1.528.283-.37.347-.586.347-.77 0-.185-.064-.4-.347-.77-.295-.388-.752-.847-1.434-1.529l-.171-.171a.75.75 0 0 1 0-1.06Zm-.952-1.105a.75.75 0 1 0-1.449-.388l-2.588 9.66a.75.75 0 1 0 1.45.387l2.587-9.659ZM9.03 7.3a.75.75 0 0 1 0 1.06l-.171.172c-.682.682-1.139 1.141-1.434 1.529-.283.37-.347.585-.347.77 0 .184.064.4.347.77.295.387.752.846 1.434 1.528l.171.171a.75.75 0 1 1-1.06 1.06l-.172-.17-.037-.037c-.635-.636-1.165-1.165-1.529-1.643-.384-.503-.654-1.035-.654-1.68 0-.644.27-1.176.654-1.68.364-.476.894-1.006 1.53-1.641l.036-.037.172-.172a.75.75 0 0 1 1.06 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="m13.792 21.319-.597 1.008c-.531.897-1.859.897-2.39 0l-.597-1.008c-.462-.781-.693-1.172-1.065-1.388-.371-.216-.84-.224-1.774-.24-1.381-.024-2.247-.109-2.974-.41a5.5 5.5 0 0 1-2.976-2.976C1 15.294 1 14.013 1 11.45v-1.1c0-3.6 0-5.401.81-6.724A5.5 5.5 0 0 1 3.626 1.81C4.95 1 6.75 1 10.35 1h3.3c3.6 0 5.401 0 6.724.81a5.5 5.5 0 0 1 1.816 1.816C23 4.95 23 6.75 23 10.35v1.1c0 2.563 0 3.844-.419 4.855a5.5 5.5 0 0 1-2.976 2.976c-.727.301-1.593.386-2.974.41-.935.016-1.403.024-1.774.24-.372.216-.603.607-1.065 1.388Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.267 6.83a.825.825 0 0 1 1.167 0l.188.188.04.04c.7.7 1.283 1.282 1.683 1.807.423.554.72 1.14.72 1.848 0 .708-.297 1.294-.72 1.848-.4.524-.983 1.107-1.682 1.806l-.23.23a.825.825 0 0 1-1.166-1.167l.189-.19c.75-.749 1.252-1.254 1.577-1.68.31-.407.381-.644.381-.847 0-.203-.07-.44-.38-.847-.326-.426-.828-.931-1.578-1.681l-.189-.189a.825.825 0 0 1 0-1.166ZM13.637 4.604c.44.118.701.57.583 1.01L11.373 16.24a.825.825 0 1 1-1.594-.427l2.847-10.625a.825.825 0 0 1 1.01-.584ZM8.733 6.83a.825.825 0 0 0-1.167 0l-.188.188-.04.04c-.7.7-1.283 1.282-1.683 1.807-.423.554-.72 1.14-.72 1.848 0 .708.297 1.294.72 1.848.4.524.983 1.107 1.682 1.806l.23.23a.825.825 0 0 0 1.166-1.167l-.189-.19c-.75-.749-1.252-1.254-1.577-1.68-.31-.407-.381-.644-.381-.847 0-.203.07-.44.38-.847.326-.426.828-.931 1.578-1.681l.189-.189a.825.825 0 0 0 0-1.166Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ChatSquareCode