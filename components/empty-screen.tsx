import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Mr. Potter!',
    message: `Mr.Potter, What are you doing here?`
  },
  {
    heading: 'Its always you three!',
    message: 'Why is it when something happens, its always you three?'
  },
  {
    heading: 'Owl',
    message: `I need an Owl!`
  },
  {
    heading: 'Basilisk',
    message: `The basilisk kills people by looking at them.`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to the MistralPotter Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an open source chatbot in the style of Harry Potter powered by the Mistral 7B model, built by Saksham Gupta, Amita Jadhav, and Siddhi Jadhav for their cloud computing project.
          .
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following magical examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
