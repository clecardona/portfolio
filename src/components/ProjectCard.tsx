"use client"

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  Icon,
  SmartLink,
  Text,
} from "@/once-ui/components"

interface ProjectCardProps {
  href: string
  priority?: boolean
  images: string[]
  title: string
  content: string
  description: string
  avatars: { src: string }[]
  link: string
  github: string
  mobile: boolean
  desktop: boolean
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  github,
  mobile,
  desktop,
}) => {
  return (
    <Column fillWidth gap='m'>
      <Carousel
        sizes='(max-width: 960px) 100vw, 960px'
        images={images.map((image) => ({
          src: image,
          alt: title,
        }))}
      />
      <Flex
        mobileDirection='column'
        fillWidth
        paddingX='s'
        paddingTop='12'
        paddingBottom='24'
        gap='l'
      >
        {title && (
          <Flex flex={5}>
            <Heading as='h2' wrap='balance' variant='heading-strong-xl'>
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap='16'>
            {avatars?.length > 0 && (
              <AvatarGroup avatars={avatars} size='m' reverse />
            )}
            {description?.trim() && (
              <Text
                wrap='balance'
                variant='body-default-s'
                onBackground='neutral-weak'
              >
                {description}
              </Text>
            )}
            <Flex gap='24' wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon='arrowRight'
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant='body-default-s'>More about the project </Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon='arrowUpRightFromSquare'
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant='body-default-s'>View demo</Text>
                </SmartLink>
              )}
              {github && (
                <SmartLink
                  suffixIcon='github'
                  style={{ margin: "0", width: "fit-content" }}
                  href={github}
                >
                  <Text variant='body-default-s'>Repository</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
        <Flex gap='12'>
          {desktop && <Icon name='desktop' onBackground='neutral-weak' />}
          {mobile && <Icon name='mobile' onBackground='neutral-weak' />}
        </Flex>
      </Flex>
    </Column>
  )
}
