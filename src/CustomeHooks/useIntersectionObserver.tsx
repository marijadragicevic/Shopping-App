import React, { useRef, useState, useEffect } from 'react';

// const useIntersectionObserver = (ref: MutableRefObject<Element | null>) => {
//     // 1.
//     const [isIntersecting, setIsIntersecting] = useState(false);
//     // 2. ref that hold the observer
//     const observer = useRef<null | IntersectionObserver>(null);
//     // 3. parametar and state to the hook function
//     const [element, setElement] = useState<Element | null>(null);

//     useEffect(() => {
//         setElement(ref.current)
//     }, [ref]);



//     useEffect(() => {

//         if (!element) return;
//         const ob = observer.current = new IntersectionObserver(([entry]) => {
//             const isElementIntersecting = entry.isIntersecting;
//             setIsIntersecting(isElementIntersecting);
//         }, {
//             threshold: 0,
//         });

//         ob.observe(element);

//         // disconnect observer when comp is unmounted or the target element is changed
//         return observer.current.disconnect();

//     }, [element]);


//     return (
//         <div>useIntersectionObserver</div>
//     )
// }

// export default useIntersectionObserver;