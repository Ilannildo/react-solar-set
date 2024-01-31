import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MagicStick = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.713 8c.024.158.06.29.12.413.148.311.42.538.963.992l.495.413c1.911 1.598 2.867 2.397 2.688 3.342-.18.946-1.374 1.412-3.765 2.344l-.618.241c-.68.265-1.02.398-1.274.647-.255.249-.395.586-.677 1.261l-.257.614c-.992 2.375-1.488 3.563-2.434 3.717-.946.155-1.715-.826-3.254-2.788l-.398-.507c-.438-.558-.656-.836-.962-.994-.306-.157-.665-.176-1.382-.213l-.654-.033c-2.524-.13-3.786-.195-4.192-1.045-.405-.85.314-1.922 1.753-4.067l.373-.555c.408-.61.613-.914.679-1.26.065-.347-.016-.696-.177-1.393l-.147-.635C4.024 6.039 3.74 4.81 4.436 4.13c.695-.68 1.91-.362 4.338.275l.628.164c.69.181 1.035.271 1.382.215.346-.057.655-.254 1.272-.648l.563-.36c2.173-1.387 3.26-2.08 4.095-1.65.518.266.727.857.825 1.873" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M19.53 18.47a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm.94 3.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-2-2 2 2 1.06-1.06-2-2-1.06 1.06Z" fill="currentColor" /></svg>, LineDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.619 3.778c2.173-1.388 3.26-2.081 4.095-1.651.835.43.866 1.698.928 4.236l.016.657c.017.72.026 1.081.175 1.393.148.311.42.538.963.992l.495.413c1.911 1.598 2.867 2.397 2.688 3.342-.18.946-1.374 1.412-3.765 2.344l-.618.241c-.68.265-1.02.398-1.274.647-.255.249-.395.586-.677 1.261l-.257.614c-.992 2.375-1.488 3.563-2.434 3.717-.946.155-1.715-.826-3.254-2.788l-.398-.507c-.438-.558-.656-.836-.962-.994-.306-.157-.665-.176-1.382-.213l-.654-.033c-2.524-.13-3.786-.195-4.192-1.045-.405-.85.314-1.922 1.753-4.067l.373-.555c.408-.61.613-.914.679-1.26.065-.347-.016-.696-.177-1.393l-.147-.635C4.024 6.039 3.74 4.81 4.436 4.13c.695-.68 1.91-.362 4.338.275l.628.164c.69.181 1.035.271 1.382.215.346-.057.655-.254 1.272-.648l.563-.36Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M19.53 18.47a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm.94 3.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-2-2 2 2 1.06-1.06-2-2-1.06 1.06Z" fill="currentColor" /></svg>, Linear: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.619 3.778c2.173-1.388 3.26-2.081 4.095-1.651.835.43.866 1.698.928 4.236l.016.657c.017.72.026 1.081.175 1.393.148.311.42.538.963.992l.495.413c1.911 1.598 2.867 2.397 2.688 3.342-.18.946-1.374 1.412-3.765 2.344l-.618.241c-.68.265-1.02.398-1.274.647-.255.249-.395.586-.677 1.261l-.257.614c-.992 2.375-1.488 3.563-2.434 3.717-.946.155-1.715-.826-3.254-2.788l-.398-.507c-.438-.558-.656-.836-.962-.994-.306-.157-.665-.176-1.382-.213l-.654-.033c-2.524-.13-3.786-.195-4.192-1.045-.405-.85.314-1.922 1.753-4.067l.373-.555c.408-.61.613-.914.679-1.26.065-.347-.016-.696-.177-1.393l-.147-.635C4.024 6.039 3.74 4.81 4.436 4.13c.695-.68 1.91-.362 4.338.275l.628.164c.69.181 1.035.271 1.382.215.346-.057.655-.254 1.272-.648l.563-.36Z" stroke="currentColor" strokeWidth={1.5} /><path d="M19.53 18.47a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm.94 3.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-2-2 2 2 1.06-1.06-2-2-1.06 1.06Z" fill="currentColor" /></svg>, Outline: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.022 4.41c1.108-.707 1.868-1.19 2.455-1.456.586-.265.789-.214.893-.16.099.05.252.173.359.789.108.62.131 1.504.163 2.798l.016.657.003.12c.013.601.025 1.118.245 1.578.22.463.615.791 1.069 1.17l.09.074.494.414c.976.815 1.638 1.371 2.046 1.835.4.454.412.659.387.792-.028.144-.13.348-.686.664-.562.318-1.396.645-2.614 1.12l-.619.242-.107.041c-.573.223-1.052.409-1.418.768-.367.358-.564.832-.8 1.401l-.045.107-.257.614c-.505 1.21-.854 2.04-1.186 2.596-.33.551-.535.647-.676.67-.129.02-.33.006-.772-.408-.45-.422-.986-1.101-1.772-2.103l-.398-.507-.073-.093c-.364-.465-.68-.87-1.136-1.105-.454-.233-.97-.259-1.568-.289l-.119-.006-.653-.033c-1.288-.067-2.167-.114-2.78-.239-.607-.123-.726-.28-.774-.38-.052-.11-.096-.319.184-.9.28-.582.782-1.334 1.515-2.426l.372-.555.066-.098c.344-.512.633-.94.727-1.441.096-.505-.02-1.003-.157-1.59L5.47 8.96l-.147-.635c-.29-1.252-.485-2.107-.535-2.736-.049-.618.062-.813.172-.92.109-.107.303-.213.915-.147.624.066 1.47.285 2.708.61l.629.165.111.029c.58.152 1.074.283 1.581.2.503-.082.938-.36 1.456-.692l.1-.064.562-.36Zm4.035-2.95c-.731-.377-1.489-.194-2.198.127-.697.316-1.55.86-2.591 1.525l-.615.393c-.673.429-.832.514-.99.54-.154.024-.319-.003-1.071-.2l-.69-.181c-1.162-.305-2.117-.555-2.868-.635-.777-.083-1.536-.008-2.123.566-.585.572-.68 1.33-.618 2.11.06.755.283 1.72.555 2.896l.161.697c.176.76.2.928.17 1.084-.03.16-.12.32-.564.982l-.407.606C2.518 13 1.953 13.84 1.62 14.53c-.338.704-.539 1.456-.186 2.197.358.749 1.073 1.05 1.83 1.204.736.15 1.729.201 2.936.263l.718.037c.786.04.949.065 1.077.13.127.066.236.18.716.79l.438.56c.735.937 1.342 1.71 1.887 2.22.564.529 1.22.927 2.038.793.805-.131 1.32-.707 1.723-1.381.394-.66.783-1.59 1.258-2.73l.28-.671c.307-.733.39-.896.51-1.014.12-.117.285-.196 1.022-.484l.619-.241.057-.023c1.146-.447 2.084-.812 2.751-1.19.684-.388 1.269-.89 1.42-1.69.154-.813-.222-1.48-.733-2.062-.494-.56-1.247-1.19-2.16-1.953l-.545-.455c-.595-.498-.706-.61-.768-.74-.063-.133-.082-.3-.102-1.089l-.017-.72c-.03-1.215-.054-2.212-.183-2.955-.133-.761-.413-1.487-1.15-1.866Zm2.473 17.01a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06l-2-2Z" fill="currentColor" /></svg>, Bold: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.714 2.127c-.836-.43-1.922.263-4.095 1.65l-.563.36c-.617.394-.926.591-1.272.648-.347.056-.692-.034-1.382-.215l-.628-.164C6.345 3.769 5.13 3.45 4.436 4.13c-.696.68-.412 1.908.157 4.363l.147.635c.161.697.242 1.046.177 1.393-.066.346-.27.65-.68 1.26l-.372.555c-1.439 2.145-2.158 3.217-1.753 4.067.406.85 1.668.915 4.192 1.045l.654.033c.717.037 1.076.056 1.382.213.306.158.524.436.962.994l.398.507c1.539 1.962 2.309 2.943 3.255 2.788.945-.154 1.441-1.342 2.433-3.717l.257-.614c.282-.675.422-1.012.677-1.261.255-.25.595-.382 1.274-.647l.618-.24c2.39-.933 3.586-1.4 3.765-2.345.179-.945-.777-1.744-2.688-3.342l-.495-.413c-.543-.454-.815-.68-.963-.992-.149-.312-.158-.672-.175-1.393l-.016-.657c-.062-2.538-.093-3.807-.928-4.236ZM19.53 18.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 1 0 1.06-1.06l-2-2Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="auto" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.714 2.127c-.836-.43-1.922.263-4.095 1.65l-.563.36c-.617.394-.926.591-1.272.648-.347.056-.692-.034-1.382-.215l-.628-.164C6.345 3.769 5.13 3.45 4.436 4.13c-.696.68-.412 1.908.157 4.363l.147.635c.161.697.242 1.046.177 1.393-.066.346-.27.65-.68 1.26l-.372.555c-1.439 2.145-2.158 3.217-1.753 4.067.406.85 1.668.915 4.192 1.045l.654.033c.717.037 1.076.056 1.382.213.306.158.524.436.962.994l.398.507c1.539 1.962 2.309 2.943 3.255 2.788.945-.154 1.441-1.342 2.433-3.717l.257-.614c.282-.675.422-1.012.677-1.261.255-.25.595-.382 1.274-.647l.618-.24c2.39-.933 3.586-1.4 3.765-2.345.179-.945-.777-1.744-2.688-3.342l-.495-.413c-.543-.454-.815-.68-.963-.992-.149-.312-.158-.672-.175-1.393l-.016-.657c-.062-2.538-.093-3.807-.928-4.236Z" fill="currentColor" /><path opacity={0.5} d="M19.53 18.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 1 0 1.06-1.06l-2-2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MagicStick