// *** WARNING: this file was generated by pulumi-gen-eks. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

import * as pulumiAws from "@pulumi/aws";

/**
 * NodeGroupSecurityGroup is a component that wraps creating a security group for node groups with the default ingress & egress rules required to connect and work with the EKS cluster security group.
 */
export class NodeGroupSecurityGroup extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'eks:index:NodeGroupSecurityGroup';

    /**
     * Returns true if the given object is an instance of NodeGroupSecurityGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NodeGroupSecurityGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NodeGroupSecurityGroup.__pulumiType;
    }

    /**
     * The security group for node groups with the default ingress & egress rules required to connect and work with the EKS cluster security group.
     */
    public /*out*/ readonly securityGroup!: pulumi.Output<pulumiAws.ec2.SecurityGroup>;
    /**
     * The EKS cluster ingress rule.
     */
    public /*out*/ readonly securityGroupRule!: pulumi.Output<pulumiAws.ec2.SecurityGroupRule>;

    /**
     * Create a NodeGroupSecurityGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NodeGroupSecurityGroupArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterSecurityGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterSecurityGroup'");
            }
            if ((!args || args.eksCluster === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eksCluster'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["clusterSecurityGroup"] = args ? args.clusterSecurityGroup : undefined;
            resourceInputs["eksCluster"] = args ? args.eksCluster : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["securityGroup"] = undefined /*out*/;
            resourceInputs["securityGroupRule"] = undefined /*out*/;
        } else {
            resourceInputs["securityGroup"] = undefined /*out*/;
            resourceInputs["securityGroupRule"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NodeGroupSecurityGroup.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a NodeGroupSecurityGroup resource.
 */
export interface NodeGroupSecurityGroupArgs {
    /**
     * The security group associated with the EKS cluster.
     */
    clusterSecurityGroup: pulumi.Input<pulumiAws.ec2.SecurityGroup>;
    /**
     * The EKS cluster associated with the worker node group
     */
    eksCluster: pulumi.Input<pulumiAws.eks.Cluster>;
    /**
     * Key-value mapping of tags to apply to this security group.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The VPC in which to create the worker node group.
     */
    vpcId: pulumi.Input<string>;
}
