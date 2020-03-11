// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { useEffect } from 'react';
import useRouter from './useRouter';

export default function (motionId?: number | null) {

	const { history } = useRouter();

	useEffect(( ) => {
		if (motionId) {
			history.push(`/motion/${motionId}`);
		}
	});
}