import { FileAsset } from "@aws-cdk/assets";
import { App, Output, Resource, Stack, StackProps } from "@aws-cdk/cdk";

export const makeRuntimeResources = (stack: Stack) => {
    const { s3BucketName, s3ObjectKey } = new FileAsset(stack, "Some asset", {
        path: "some-path"
    });

    const { ref } = new Resource(stack, "Some resource", {
        type: "AWS::Lambda::LayerVersion",
        properties: {
            Content: {
                S3Bucket: s3BucketName,
                S3Key: s3ObjectKey
            },
            Description: "My layer",
            LayerName: "my-layer"
        }
    });

    new Output(stack, "LayerARN", { value: ref });
};

export class RuntimeStack extends Stack {
    constructor(parent: App, name: string, props?: StackProps) {
        super(parent, name, props);

        makeRuntimeResources(this);
    }
}
