FROM python:3.9-alpine

ENV PYTHONDONTWRITEBYTECODE=1

ENV PYTHONUNBUFFERED=1

WORKDIR /backend

COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

RUN chmod +x /backend/entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["/backend/entrypoint.sh"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]