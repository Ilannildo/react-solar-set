import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BookmarkSquareMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path d="M17 2v6.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 10.27 7 9.783 7 8.808V2" stroke="#1C274D" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="#1C274D" strokeWidth={1.5} /><path opacity={0.5} d="M17 2v6.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 10.27 7 9.783 7 8.808V2" stroke="#1C274D" strokeWidth={1.5} /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="#1C274D" strokeWidth={1.5} /><path d="M17 2v6.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 10.27 7 9.783 7 8.808V2" stroke="#1C274D" strokeWidth={1.5} /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19h-.114ZM6.25 2.982c-1.065.183-1.742.5-2.255 1.013-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62-.513-.513-1.19-.829-2.255-1.012V8.83c0 .468 0 .851-.017 1.153-.018.298-.054.606-.177.881a2.25 2.25 0 0 1-2.587 1.273c-.293-.07-.56-.23-.806-.398-.25-.17-.553-.404-.924-.69l-.018-.014c-.47-.36-.602-.456-.723-.508a1.25 1.25 0 0 0-.996 0c-.121.052-.253.147-.723.508l-.018.015c-.37.285-.675.519-.924.69-.247.167-.513.326-.806.397a2.25 2.25 0 0 1-2.587-1.273c-.123-.275-.16-.583-.177-.881-.017-.302-.017-.685-.017-1.153v-5.85Zm10-.162c-1.126-.07-2.508-.07-4.25-.07s-3.124 0-4.25.07v5.988c0 .496 0 .836.015 1.09.015.262.043.343.05.358a.75.75 0 0 0 .862.425c.016-.004.097-.032.314-.18.21-.143.48-.35.873-.653l.067-.052c.37-.285.659-.507.973-.644a2.75 2.75 0 0 1 2.192 0c.314.137.603.359.973.644l.067.052c.393.303.663.51.873.653.217.148.298.176.314.18a.75.75 0 0 0 .862-.425c.007-.015.035-.096.05-.358.015-.254.015-.594.015-1.09V2.82Z" fill="#1C274D" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.765 9.898a21.482 21.482 0 0 1-.015-1.09v-6.74C8.906 2 10.3 2 12 2c1.7 0 3.094 0 4.25.069v6.739c0 .496 0 .836-.015 1.09-.015.262-.043.343-.05.358a.75.75 0 0 1-.862.425c-.016-.004-.097-.032-.315-.18-.21-.143-.479-.35-.872-.653l-.067-.052c-.37-.285-.659-.507-.973-.644a2.75 2.75 0 0 0-2.192 0c-.314.137-.603.359-.973.644l-.067.052c-.393.303-.663.51-.873.653-.217.148-.298.176-.314.18a.75.75 0 0 1-.862-.425c-.007-.015-.035-.096-.05-.358Z" fill="#1C274D" /><path d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.15 2.78 5.027 2.416 6.25 2.222V8.83c0 .468 0 .851.017 1.153.018.298.054.606.177.881a2.25 2.25 0 0 0 2.587 1.273c.293-.07.56-.23.806-.398.25-.17.553-.404.924-.69l.018-.014c.47-.36.602-.456.723-.508a1.25 1.25 0 0 1 .996 0c.121.052.253.147.723.508l.018.015c.37.285.675.519.924.69.247.167.513.326.806.397a2.25 2.25 0 0 0 2.587-1.273c.123-.275.16-.583.177-.881.017-.302.017-.685.017-1.153v-6.61c1.223.195 2.102.56 2.785 1.243C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Z" fill="#1C274D" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.464 20.536C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.464C22 19.07 22 16.714 22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.536Z" fill="#1C274D" /><path d="M7.765 9.898a21.482 21.482 0 0 1-.015-1.09v-6.74C8.906 2 10.3 2 12 2c1.7 0 3.094 0 4.25.069v6.739c0 .496 0 .836-.015 1.09-.015.262-.043.343-.05.358a.75.75 0 0 1-.862.425c-.016-.004-.097-.032-.315-.18-.21-.143-.479-.35-.872-.653l-.067-.052c-.37-.285-.659-.507-.973-.644a2.75 2.75 0 0 0-2.192 0c-.314.137-.603.359-.973.644l-.067.052c-.393.303-.663.51-.873.653-.217.148-.298.176-.314.18a.75.75 0 0 1-.862-.425c-.007-.015-.035-.096-.05-.358Z" fill="#1C274D" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BookmarkSquareMinimalistic