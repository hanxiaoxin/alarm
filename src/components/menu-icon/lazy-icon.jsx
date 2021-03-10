import React, {Suspense} from 'react';

const OtherComponent = React.lazy(() => import('./panda-icon'));

export default function Lazy() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent/>
        </Suspense>
    );
}
