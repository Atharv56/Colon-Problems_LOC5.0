const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_51MkPqBSCSA8WHCEunomb4ouxYf58QUYDK198XI6JHekkInHmjxFp9Jqn1l1C80apZbCq7wG92WGB7VgxXCysv09B007q1pi6V0'
  : 'pk_test_51MkPqBSCSA8WHCEunomb4ouxYf58QUYDK198XI6JHekkInHmjxFp9Jqn1l1C80apZbCq7wG92WGB7VgxXCysv09B007q1pi6V0';

export default STRIPE_PUBLISHABLE;