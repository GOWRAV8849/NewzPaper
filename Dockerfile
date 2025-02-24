# Use a base image with Python & Ollama
FROM python:3.10

# Install Ollama
RUN curl -fsSL https://ollama.ai/install.sh | sh

# Set the working directory
WORKDIR /app

# Copy the project files
COPY . /app

# Install dependencies
RUN pip install -r requirements.txt

# Download the Llama 3.2 model
RUN ollama pull llama3.2

# Expose the necessary port
EXPOSE 5000

# Run the Flask app
CMD ["python", "data.py"]
