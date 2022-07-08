import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import useFriendStatus from "../FriendStatus";

describe("test customhook useFriendStatus",() => {
    test('should be able to fetch the friend\'s online/offline status',
    async () => {
        let initialValue = "617a8672f1cf5b20774e6384";
        const { result, waitForNextUpdate } = renderHook(() => useFriendStatus(initialValue));

        await waitForNextUpdate({
            timeout: 5000
        });
        expect(result.current).toBe("offline");
    });

    test('should be able to fetch the friend\'s online/offline status when the props change.',
        () => {

        });
});

