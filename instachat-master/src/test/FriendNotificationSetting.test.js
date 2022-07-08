import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';

import useFriendNotifications from "../FriendNotificationSetting";


describe("Test useFriendNotifications custom hook", () => {

    test('should be able to fetch notification settings assigned for a friend',
    async () => {
        let initialValue = "617a8672f1cf5b20774e6384";
        const { result, waitForNextUpdate } = renderHook(() => useFriendNotifications(initialValue));

        await waitForNextUpdate({
            timeout: 5000
        });

        expect(result.current[0]).toBe(false);
    });

    it('Should be able to fetch notification settings assigned for a friend when the props change.',
        () => {
            
        });

    it('Should be able to trigger the Update Notification settings when the setter of the custom hook is called.',
        () => {
            
        });
});