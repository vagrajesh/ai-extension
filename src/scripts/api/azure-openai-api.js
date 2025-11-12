class AzureOpenAIAPI {
    constructor(endpoint, deploymentName, apiKey, apiVersion = '2024-08-01-preview') {
        this.endpoint = endpoint.replace(/\/$/, ''); // Remove trailing slash
        this.deploymentName = deploymentName;
        this.apiKey = apiKey;
        this.apiVersion = apiVersion;
        // Construct the full URL with deployment name and API version
        this.baseUrl = `${this.endpoint}/openai/deployments/${this.deploymentName}/chat/completions?api-version=${this.apiVersion}`;
    }

    async sendMessage(prompt, modelName = null) {
        try {
            console.log('Sending request to Azure OpenAI API...');
            console.log('Base URL:', this.baseUrl);
            console.log('Deployment:', this.deploymentName);
            
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': this.apiKey
                },
                body: JSON.stringify({
                    messages: [{
                        role: 'user',
                        content: prompt
                    }],
                    max_tokens: 4096,
                    temperature: 0.7,
                    top_p: 0.95,
                    frequency_penalty: 0,
                    presence_penalty: 0
                })
            });

            if (!response.ok) {
                const errorData = await response.text();
                console.error('API Response:', response.status, errorData);
                throw new Error(`API call failed: ${response.status} - ${errorData}`);
            }

            const data = await response.json();
            console.log('Azure OpenAI API response:', data);

            return {
                content: data.choices[0].message.content,
                usage: {
                    input_tokens: data.usage.prompt_tokens,
                    output_tokens: data.usage.completion_tokens
                }
            };
        } catch (error) {
            console.error('Error calling Azure OpenAI API:', error);
            throw error;
        }
    }

    /**
     * Validate the Azure OpenAI configuration
     * @returns {Promise<boolean>}
     */
    async validateConnection() {
        try {
            await this.sendMessage('Test connection');
            return true;
        } catch (error) {
            console.error('Azure OpenAI validation failed:', error);
            return false;
        }
    }
}

// Make the class available globally
window.AzureOpenAIAPI = AzureOpenAIAPI;