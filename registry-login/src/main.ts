import * as actionsToolkit from "@docker/actions-toolkit";

import * as context from './context';
import * as docker from './docker';

const inputs: context.Inputs = context.getInputs();

export async function main(): Promise<void> {
	await docker.login(inputs.registryHostname, inputs.username, inputs.password);
}

async function post(): Promise<void> {
	await docker.logout(inputs.registryHostname);
}

actionsToolkit.run(main, post);