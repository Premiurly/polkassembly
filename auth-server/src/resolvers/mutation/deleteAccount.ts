// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { Context, DeleteAccountArgs, MessageType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

export default async (parent: void, { password }: DeleteAccountArgs, ctx: Context): Promise<MessageType> => {
	const token = getTokenFromReq(ctx.req);

	const authServiceInstance = new AuthService();
	await authServiceInstance.DeleteAccount(token, password);

	return { message: messages.ACCOUNT_DELETE_SUCCESSFUL };
};
