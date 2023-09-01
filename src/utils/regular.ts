export const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const getFunctionExecutionTime = (callback: () => void): number => {
    const currentTime: number = new Date().getTime();
    callback();
    return new Date().getTime() - currentTime;
};
