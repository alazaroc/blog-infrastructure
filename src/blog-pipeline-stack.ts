import { App, Stack, StackProps } from 'aws-cdk-lib';
import { createCodePipeline } from './resources/codepipeline';

export class BlogPipelineStack extends Stack {
  public constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    createCodePipeline(this);
  }
}
